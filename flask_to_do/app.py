from flask import Flask, redirect, request, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# Models
class ToDo(db.Model):
    id     = db.Column(db.Integer, primary_key=True)
    name   = db.Column(db.String(100))
    status = db.Column(db.Boolean, default=False) 

    def __repr__(self) -> str:
        return self.name 

# Routes
@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        object_content = request.form['add']
        new_object = ToDo(name=object_content)

        try:
            db.session.add(new_object)
            db.session.commit()
            return redirect('/')
        except:
            return 'Something went wrong'
        
    else:
        objects = ToDo.query.all()
        return render_template('todo.html', object_list=objects)

@app.route('/delete/<int:id>')
def delete(id):
    object = ToDo.query.get_or_404(id)
    db.session.delete(object)
    db.session.commit()
    return redirect('/')

@app.route('/update/<int:id>')
def update(id):
    object = ToDo.query.get(id)
    if object.status == True:
        object.status = False
    else: 
        object.status = True
    db.session.commit()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=False)