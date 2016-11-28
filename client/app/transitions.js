export default function() {
    this.transition(
        this.fromRoute('index'),
        this.toRoute('researcher'),
        this.use('cross-fade'),
        this.reverse('cross-fade')
    );

    this.transition(
        this.fromRoute('researcher.index'),
        this.toRoute('researcher.overview'),
        this.use('cross-fade'),
        this.reverse('cross-fade')
    );
}
