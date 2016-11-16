import datetime

from api.models import Document, Department
from django.test import TestCase


class SetupTestCase(TestCase):
    def setUp(self):
        d = Document()
        dep = Department()
        try:
            dep.name = 'NIH'
            dep.save()
        except:
            self.fail('Department could not be saved!')
        try:
            d.title = 'Correlations within Causations'
            d.institution = 'COS'
            d.pifirstname = 'Foo'
            d.pilastname = 'Bar'
            d.piemail = 'foo@bar.com'
            d.status = 'Pending'
            d.datepublished = datetime.datetime.now()  # update this to use datetime
            d.filelink = '~/doc.txt'
            d.department = dep
            d.save()
        except:
            self.fail('Document could not be saved!')

    def test_if_something(self):
        x = 1 + 1
        self.assertEqual(x, 2)
