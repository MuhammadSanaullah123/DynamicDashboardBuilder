# DynamicDashboardBuilder
1. DynamicDashboardBuilder is a web application built on React,Vite and react-chartjs-2.
2. Being a dynamic dashboard builder, we can add any widgets with custom attributes.
3. You just have to change values in the constant.js file in the src folder.
4. The constant.js file contains an array consisting of objects where each object represents a single widget(chart).
5. We can add any number of widgets as objects in the array as we like and insert/modify properties of each widget/objects.
6. We can specify the type of widget,title,labels, data, height/width, order(position in the grid), priority (which widget will be fetched and rendered first), color.
7. The container in which the widgets are rendered is divided into a grid containing 2 columns, and multiple rows (depending on the # of widgets).
8. If the value of order is "2", it means the widget will be placed in the 2nd row.
9. If two widgets have the same order value then they are placed in the same row.
