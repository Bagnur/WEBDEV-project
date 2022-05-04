
from django.db import models
class Category(models.Model):
    name = models.CharField(max_length = 255)
    def __str__(self):
        return self.name

    def to_json(self):
        return {
        "id": self.id,
        "name": self.name
        }

class Product(models.Model):
    categoryid = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    photo = models.CharField(max_length=1024)
    link = models.CharField(max_length=1024)
    rating = models.FloatField()
    likes = models.IntegerField()

    def __str__(self):
        return self.name

    def to_json(self):
        return {
        "id": self.id,
        "name": self.name,
        "price": self.price,
        "description": self.description,
        "photo": self.photo,
        "link": self.link,
        "rating": self.rating,
        "likes": self.likes
        }


class User(models.Model):
  login = models.TextField()
  password = models.TextField()