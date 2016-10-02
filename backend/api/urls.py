
from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_nested import routers

from api import views

router = routers.SimpleRouter()
router.register(r'agencies', views.AgencyViewSet)
router.register(r'documents', views.DocumentViewSet)
router.register(r'grants', views.GrantViewSet)
#router.register(r'institutions', views.InstitutionViewSet)
router.register(r'users', views.UserViewSet)

agencyRouter = routers.NestedSimpleRouter(router, r'agencies', lookup='agency')
agencyRouter.register(r'grants', views.GrantViewSet, base_name='agency-grant')

urlpatterns = format_suffix_patterns([
    url(r'^$',views.api_root),
    url(r'^', include(router.urls)),
    url(r'^', include(agencyRouter.urls)),
    url(r'^agencies/(?P<pk>[^/.]+)/relationships/(?P<related_field>[^/.]+)/$', views.AgencyRelationshipView.as_view(), name='agency-relationships'),
])

