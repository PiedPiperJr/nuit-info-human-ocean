from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import statistics

app = Flask(__name__)
CORS(app)

# Structured storage for different types of events
analytics_data = {
    'clicks': [],
    'mouseMoves': [],
    'pageViews': [],
    'articleViews': [],
    'formSubmissions': []
}

@app.route('/track', methods=['POST'])
def track_data():
    data = request.json
    data['serverTimestamp'] = datetime.now().isoformat()
    
    # Categorize and store data based on event type
    event_type = data.get('eventType')
    if event_type == 'click':
        analytics_data['clicks'].append(data)
    elif event_type in ['mouseMove', 'mouseMoveBundle']:
        if event_type == 'mouseMoveBundle':
            analytics_data['mouseMoves'].extend(data['movements'])
        else:
            analytics_data['mouseMoves'].append(data)
    elif event_type in ['pageEnter', 'pageExit']:
        analytics_data['pageViews'].append(data)
    elif event_type in ['articleEnter', 'articleExit']:
        analytics_data['articleViews'].append(data)
    elif event_type == 'formSubmit':
        analytics_data['formSubmissions'].append(data)
    
    return jsonify({'message': 'Data received','data': data}), 200

@app.route('/analytics', methods=['GET'])
def get_analytics():
    # Analyze click patterns
    click_heatmap = generate_click_heatmap()
    
    # Analyze mouse movement patterns
    mouse_speed_stats = calculate_mouse_speed_stats()
    
    # Analyze page and article engagement
    engagement_metrics = calculate_engagement_metrics()
    
    # Analyze form interactions
    form_metrics = calculate_form_metrics()
    
    return jsonify({
        'clickHeatmap': click_heatmap,
        'mouseSpeedStats': mouse_speed_stats,
        'engagementMetrics': engagement_metrics,
        'formMetrics': form_metrics
    }), 200

def generate_click_heatmap():
    clicks = analytics_data['clicks']
    heatmap = {}
    for click in clicks:
        pos = f"{click['position']['x']},{click['position']['y']}"
        if pos not in heatmap:
            heatmap[pos] = 0
        heatmap[pos] += 1
    return heatmap

def calculate_mouse_speed_stats():
    moves = analytics_data['mouseMoves']
    if not moves:
        return {}
    
    speeds = [
        (move['speed']['x']**2 + move['speed']['y']**2)**0.5 / move['speed']['timeDelta']
        for move in moves if 'speed' in move and 'timeDelta' in move['speed'] and move['speed']['timeDelta'] > 0
    ]
    
    return {
        'averageSpeed': statistics.mean(speeds) if speeds else 0,
        'maxSpeed': max(speeds) if speeds else 0,
        'medianSpeed': statistics.median(speeds) if speeds else 0
    }

def calculate_engagement_metrics():
    page_views = analytics_data['pageViews']
    article_views = analytics_data['articleViews']
    
    # Calculate average time spent on pages
    page_times = {}
    for view in page_views:
        if view['eventType'] == 'pageExit' and 'timeSpent' in view:
            page = view['page']
            if page not in page_times:
                page_times[page] = []
            page_times[page].append(view['timeSpent'])
    
    avg_page_times = {
        page: statistics.mean(times) / 1000  # Convert to seconds
        for page, times in page_times.items()
    }
    
    # Calculate article engagement
    article_times = {}
    for view in article_views:
        if view['eventType'] == 'articleExit' and 'timeSpent' in view:
            article = view['articleId']
            if article not in article_times:
                article_times[article] = []
            article_times[article].append(view['timeSpent'])
    
    avg_article_times = {
        article: statistics.mean(times) / 1000  # Convert to seconds
        for article, times in article_times.items()
    }
    
    return {
        'averagePageTimes': avg_page_times,
        'averageArticleTimes': avg_article_times
    }

def calculate_form_metrics():
    submissions = analytics_data['formSubmissions']
    
    form_times = {}
    form_completion_rates = {}
    
    for submission in submissions:
        form_id = submission['formId']
        if form_id not in form_times:
            form_times[form_id] = []
        form_times[form_id].append(submission['timeToComplete'])
    
    avg_form_times = {
        form: statistics.mean(times) / 1000  # Convert to seconds
        for form, times in form_times.items()
    }
    
    return {
        'averageCompletionTimes': avg_form_times,
        'completionRates': form_completion_rates
    }

if __name__ == '__main__':
    app.run(debug=True)