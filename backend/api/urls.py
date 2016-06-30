
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = format_suffix_patterns([
    url(r'^$', views.api_root),
    url(r'documents/$', views.DocumentList.as_view(),
        name='document-list'),
    url(r'^documents/(?P<pk>[0-9]+)/$',
        views.DocumentDetail.as_view(),
        name='document-detail'),
    url(r'authors/$', views.AuthorList.as_view(),
        name='author-list'),
    url(r'^authors/(?P<pk>[0-9]+)/$',
        views.AuthorDetail.as_view(),
        name='author-detail'),
    url(r'departments/$', views.DepartmentList.as_view(),
        name='department-list'),
    url(r'^departments/(?P<pk>[0-9]+)/$',
        views.DepartmentDetail.as_view(),
        name='department-detail'),
    url(r'users/$', views.UserList.as_view(),
        name='user-list'),
    url(r'^users/(?P<pk>[0-9]+)/$',
        views.UserDetail.as_view(),
        name='user-detail'),  
])
