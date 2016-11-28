export default function() {
    this.transition(
        this.fromRoute('index'),
        this.toRoute('researcher'),
        this.use('cross-fade'),
        this.reverse('cross-fade')
    );

    this.transition(
        this.fromRoute('researcher'),
        this.toRoute('researcher.index'),
        this.use('cross-fade'),
        this.reverse('cross-fade')
    );

    this.transition(
        this.fromRoute('researcher.index'),
        this.toRoute('researcher.overview'),
        this.use('cross-fade'),
        this.reverse('cross-fade')
    );
    
    
    this.transition(
        this.fromRoute('index'),
        this.toRoute('institution'),
        this.use('cross-fade'),
        this.reverse('cross-fade')
    );

   
    this.transition(
        this.fromRoute('institution'),
        this.toRoute('institution.index'),
        this.use('cross-fade'),
        this.reverse('cross-fade')
    );
   
    this.transition(
        this.fromRoute('institution.index'),
        this.toRoute('institution.overview'),
        this.use('cross-fade'),
        this.reverse('cross-fade')
    );
}
