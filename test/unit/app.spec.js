describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 10, age: 5, course: 'kids'
            });
        });
        it('This should give you an error if we give 18 to a group of children', function(){
            expect(app.assignToSwimmingCourse('Name','10/04/1997')).toEqual({
                name: 'Name', age: 18, course: 'kids'
            });
        });
    });
    describe('calculateArea',function(){
        it('should message error if area < 0', function(){
            expect(app.calculateArea(3,5,4,'Success','Error')).toEqual({
                area: -7, message: 'Error'
            });
        });
        it('should message success if area > 0',function(){
            expect(app.calculateArea(3,2,1,'Success','Error')).toEqual({
                area: 1, message: 'Success'
            });
        });
        it('should message Big null if area: 0',function(){
            expect(app.calculateArea(4,2,2,'Success','Area')).toEqual({
                area: 0, message: 'Big null'
            });
        });

    });
});


