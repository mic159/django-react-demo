from django.shortcuts import render
from django.forms.models import model_to_dict
from react_render.django import render_component

from react_demo.app.models import Product

PRODUCTS = [
    Product(title='Product 1', price=25.0, subtitle='Essential product for everyone'),
    Product(title='Product 2', price=100.0, subtitle='Essential product for everyone'),
    Product(title='Product 3', price=25.0, subtitle='Essential product for everyone'),
    Product(title='Product 1', price=25.0, subtitle='Essential product for everyone'),
    Product(title='Product 1', price=25.0, subtitle='Essential product for everyone'),
    Product(title='Product 1', price=25.0, subtitle='Essential product for everyone'),
]

def index(request):
    # Properties to pass into react component
    props = {
        'products': [model_to_dict(m) for m in PRODUCTS]
    }

    context = {
        # Render the CommentBox component down to HTML
        'react_component': render_component('js/server/Component.js', props),
    }

    return render(request, 'index.html', context)
