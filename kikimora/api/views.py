from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http.response import HttpResponse, JsonResponse

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

class CategoryView(APIView):
  def get(self, request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)

  def post(self, request):
    category = request.data.get('categories')
    serializer = CategorySerializer(data=category)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
    return Response(serializer.data)

  def put(self, request, id):
    category = get_object_or_404(Category.objects.all(), id = id)
    data = request.data.get('categories')
    serializer = CategorySerializer(instance = category, data = data, partial=True)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
    return Response(serializer.data)

  def delete(self, request, id):
    category = get_object_or_404(Category.objects.all(), id = id)
    category.delete()
    return Response({'message': 'Category was deleted'})

def product_list(request, id):
    products = Product.objects.filter(categoryid = id)
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def product_one(request, id):
    try:
        product = Product.objects.get(id = id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(product.to_json())


# class ProductView(APIView):
#   def get(self, request):
#     product = Product.objects.all()
#     serializer = ProductSerializer(product, many=True)
#     return Response(serializer.data)

#   def post(self, request):
#     product = request.data.get('categories')
#     serializer = ProductSerializer(data=product)
#     if serializer.is_valid(raise_exception=True):
#       serializer.save()
#     return Response(serializer.data)

#   def put(self, request, id):
#     product = get_object_or_404(Product.objects.all(), id = id)
#     data = request.data.get('categories')
#     serializer = ProductSerializer(instance = product, data = data, partial=True)
#     if serializer.is_valid(raise_exception=True):
#       serializer.save()
#     return Response(serializer.data)

#   def delete(self, request, id):
#     product = get_object_or_404(Product.objects.all(), id = id)
#     product.delete()
#     return Response({'message': 'Product was deleted'})