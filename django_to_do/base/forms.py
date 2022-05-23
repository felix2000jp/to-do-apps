from django import forms
from .models import ToDo

class ToDoCreateForm(forms.ModelForm):
    class Meta:
        model  = ToDo
        fields = ['name']

        labels = {
            'name' : '',
        }

        widgets = {
            'name'  : forms.TextInput(attrs={'class': 'form-control w-25', 'placeholder': 'Name'}),
        }