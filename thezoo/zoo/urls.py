from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from zoo import views

urlpatterns = format_suffix_patterns([
    url(r'^$', views.api_root),
    url(r'animals/$', views.AnimalList.as_view(),
        name='animal-list'),
    url(r'^animals/(?P<pk>[0-9]+)/$',
        views.AnimalDetail.as_view(),
        name='animal-detail'),
    url(r'enclosures/$', views.EnclosureList.as_view(),
        name='enclosure-list'),
    url(r'^enclosures/(?P<pk>[0-9]+)/$',
        views.EnclosureDetail.as_view(),
        name='enclosure-detail'),
    url(r'zookeepers/$', views.ZookeeperList.as_view(),
        name='zookeeper-list'),
    url(r'^zookeepers/(?P<pk>[0-9]+)/$',
        views.ZookeeperDetail.as_view(),
        name='zookeeper-detail'),
])