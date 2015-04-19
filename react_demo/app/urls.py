from django.conf.urls import patterns, url

urlpatterns = patterns('react_demo.app.views',
    url(r'^$', 'index', name='index'),
)
