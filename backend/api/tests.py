from django.test import TestCase
from api.models import Author, Document, Department
from api.serializers import AuthorSerializer, DocumentSerializer, DepartmentSerializer
import datetime


class SetupTestCase(TestCase):

    def setUp(self):
        a = Author()
        d = Document()
        dep = Department()
        try:
            a.name_first = 'Foo'
            a.name_middle = 'Baz'
            a.name_last = 'Bar'
            a.email = 'foo@gmail.com'
            a.save()
        except:
            self.fail('Author could not be saved!')
        try:
            d.title = 'Correlations within Causations'
            d.institution = ''
            d.primary_investigator = a
            d.status = 'Pending'
            d.date_published = datetime.datetime.now()  # update this to use datetime
            d.file_link = '~/doc.txt'
            d.save()
        except:
            self.fail('Document could not be saved!')
        try:
            dep.name = 'NIH'
            dep.save()
            # dep.documents.add(d)
            # dep.save()
        except:
            self.fail('Department could not be saved!')

    def test_get_author_attributes(self):
        self.assertEqual(Author.objects.first().email, 'foo@gmail.com')
        self.assertEqual(Author.objects.first().name_first, 'Foo')
        self.assertEqual(Author.objects.first().name_middle, 'Baz')
        self.assertEqual(Author.objects.first().name_last, 'Bar')

    def test_author_name(self):
        a = Author.objects.first()
        a.name_middle = ''
        a.save()
        self.assertEqual(Author.objects.first().name_middle, '')
        try:
            a.name_first = ''
            a.save()
        except:
            pass
        self.assertNotEqual(Author.objects.first().name_first, '')
        try:
            a.name_last = ''
            a.save()
        except:
            pass
        self.assertNotEqual(Author.objects.first().name_last, '')

    def test_author_email(self):
        a = Author.objects.first()
        invalid_emails = ['foo',
                          '.name@gmail.com',
                          'foo@bar',
                          '@foobar.com',
                          'foo@baz.bar.com']
        for x in invalid_emails:
            try:
                a.email = x
                a.save()
            except:
                pass
        self.assertEqual(Author.objects.first().email, 'foo@gmail.com')


