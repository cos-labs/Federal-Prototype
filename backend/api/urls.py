from api import views
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = format_suffix_patterns([
    url(r'^$', views.api_root),
    url(r'documents/$', views.DocumentList.as_view(),
        name='document-list'),
    url(r'^documents/(?P<pk>[0-9]+)/$',
        views.DocumentDetail.as_view(),
        name='document-detail'),
    url(r'departments/$', views.DepartmentList.as_view(),
        name='department-list'),
    url(r'^departments/(?P<pk>[0-9]+)/$',
        views.DepartmentDetail.as_view(),
        name='department-detail'),
    url(r'usertypes/$', views.UsertypeList.as_view(),
        name='usertype-list'),
    url(r'^usertype/(?P<pk>[0-9]+)/$',
        views.UsertypeDetail.as_view(),
        name='usertype-detail'),
    url(r'users/$', views.UserList.as_view(),
        name='user-list'),
    url(r'^user/(?P<pk>[0-9]+)/$',
        views.UserDetail.as_view(),
        name='user-detail'),
    url(r'grants/$', views.GrantList.as_view(),
        name='grant-list'),
    url(r'^grant/(?P<pk>[0-9]+)/$',
        views.GrantDetail.as_view(),
        name='grant-detail'),
])
