from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    
    name = serializers.CharField(max_length = 255)

    class Meta:
        model = Category
        fields = ['id', 'name']

    def create(self, data):
        return Category.objects.create(**data)

    def update(self, instance, data):
        instance.name = data.get('name', instance.name)
        instance.save()
        return instance

    def delete(self, request, id):
        game = get_object_or_404(Category.objects.all(), id=id)
        game.delete()
        return Response({"message": "Category was deleted"})

class ProductSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=255)
    price = serializers.FloatField()
    description = serializers.CharField(max_length=10000)
    photo = serializers.CharField(max_length=1024)
    link = serializers.CharField(max_length=1024)
    rating = serializers.FloatField()
    likes = serializers.IntegerField()
    class Meta:
        model = Product
        fields = ['id', 'categoryid','name', 'price','description', 'photo','link', 'rating','likes']
