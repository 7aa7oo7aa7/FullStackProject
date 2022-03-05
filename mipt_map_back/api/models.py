from django.db import models

class Schedule(models.Model):
    subject_name = models.CharField(verbose_name='Название предмета', max_length=128)
    week_day = models.CharField(verbose_name='День недели', max_length=1)
    pair_number = models.CharField(verbose_name='Номер пары', max_length=1)
    building_id = models.CharField(verbose_name='Корпус', max_length=2)
    floor_id = models.CharField(verbose_name='Этаж', max_length=2)
    classroom_id = models.CharField(verbose_name='Аудитория', max_length=2)

    def __str__(self):
        return self.subject_name
