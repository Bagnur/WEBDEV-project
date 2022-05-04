from django.urls import path
from .views import CategoryView, product_list,product_one
from django.utils.translation import gettext_lazy

app_name = "api"

urlpatterns = [
  path('categories', CategoryView.as_view()),
  path('categories/<int:id>', CategoryView.as_view()),
  path('categories/<int:id>/products', product_list),
  path('products/<int:id>',product_one),
]
