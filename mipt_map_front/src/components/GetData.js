function GetData(element) {

    const buildings = [
        {id: 0, value: 'Выберите корпус'},
        {id: 1, value: 'Корпус микроэлектроники (НК)'},
        {id: 2, value: 'Главный корпус (ГК)'},
        {id: 3, value: 'Корпус прикладной математики (КПМ)'},
        {id: 4, value: 'Лабораторный корпус (ЛК)'},
        {id: 5, value: 'Физтех.Цифра (УЛК-1)'},
        {id: 6, value: 'Физтех.Арктика (УЛК-2)'},
        {id: 7, value: 'Аудиторный корпус (АК)'},
        {id: 8, value: 'Радиотехнический корпус (РТ)'},
        {id: 9, value: 'Физтех.Био (БК)'},
        {id: 10, value: 'Комбинат студенческого питания (КСП)'}
    ];

    const buildings_short = [
        {id: 0, value: 'Выберите корпус'},
        {id: 1, value: 'НК'},
        {id: 2, value: 'ГК'},
        {id: 3, value: 'КПМ'},
        {id: 4, value: 'ЛК'},
        {id: 5, value: 'УЛК-1'},
        {id: 6, value: 'УЛК-2'},
        {id: 7, value: 'АК'},
        {id: 8, value: 'РТ'},
        {id: 9, value: 'БК'},
        {id: 10, value: 'КСП'}
    ];

    const all_floors = [
        {id: 0, value: 'Выберите этаж'},
        {id: 1, value: '1'},
        {id: 2, value: '2'},
        {id: 3, value: '3'},
        {id: 4, value: '4'},
        {id: 5, value: '5'},
        {id: 6, value: '6'},
        {id: 7, value: '7'},
        {id: 8, value: '8'},
        {id: 9, value: '9'},
        {id: 10, value: '10'}
    ];

    const floors = [
        [all_floors[0]],
        all_floors.slice(0, 5),  // НК
        all_floors.slice(0, 6),  // ГК
        all_floors.slice(0, 11),  // КПМ
        all_floors.slice(0, 6),  // ЛК
        all_floors.slice(0, 7),  // Физтех.Цифра
        all_floors.slice(0, 7),  // Физтех.Арктика
        all_floors.slice(0, 7),  // АК
        all_floors.slice(0, 4),  // РТ
        all_floors.slice(0, 7),  // БК
        all_floors.slice(0, 4)  // КСП
    ];

    const classroom_default = {
        id: 0, value: 'Выберите аудиторию',
        desc: 'Здесь появится информация об аудитории, которую Вы выберете. На данный момент на сайте есть карты 2 этажа НК, 2 этажа УЛК-1 и 2-4 этажей ГК. Выбор аудиторий пока добавлен только на 2 этаже ГК.'
    };

    const classrooms = [
        [[classroom_default]],
        [  // НК
            [classroom_default],
            [  // 1
                classroom_default
            ],
            [  // 2
                classroom_default
            ],
            [  // 3
                classroom_default
            ],
            [  // 4
                classroom_default
            ]
        ],
        [  // ГК
            [classroom_default],
            [  // 1
                classroom_default
            ],
            [  // 2
                classroom_default,
                {id: 1, value: 'Столовая',
                desc: 'Столовая Главного корпуса.'},
                {id: 2, value: 'Женский туалет',
                desc: 'Единственный женский туалет на 2 этаже ГК.'},
                {id: 3, value: 'Мужской туалет',
                desc: 'Единственный мужской туалет на 2 этаже ГК.'},
                { id: 4, value: 'Фойе КЗ',
                desc: 'Фойе концертного зала МФТИ.'},
                {id: 5, value: 'КЗ',
                desc: 'Концертный зал МФТИ.'},
                {id: 6, value: 'Диванчики',
                desc: 'Диванчики, находящиеся в коридоре.'},
                {id: 7, value: 'Буфет',
                desc: 'Буфет, находящийся возле диванчиков и читальных залов.'},
                {id: 8, value: 'Серая боталка',
                desc: 'Серый читальный зал.'},
                {id: 9, value: 'Зелёная боталка',
                desc: 'Зелёный читальный зал.'},
                {id: 10, value: 'Синяя боталка',
                desc: 'Синий читальный зал.'},
                {id: 11, value: 'Красная боталка',
                desc: 'Красный читальный зал.'},
                {id: 12, value: '201',
                desc: 'Преподавательская ФЭФМ.'},
                {id: 13, value: '202',
                desc: 'Кафедра твердотельной электроники, радиофизики и прикладных информационных технологий.'},
                {id: 14, value: '203',
                desc: 'Лаборатория терагерцовой спинтроники.'},
                {id: 15, value: '204',
                desc: 'Аудитория 204.'},
                {id: 16, value: '204а',
                desc: 'Аудитория 204а.'},
                {id: 17, value: '205',
                desc: 'Кафедра твердотельной электроники, радиофизики и прикладных информационных технологий.'},
                {id: 18, value: '206',
                desc: 'Кафедра твердотельной электроники, радиофизики и прикладных информационных технологий.'},
                {id: 19, value: '208',
                desc: 'Кафедра твердотельной электроники, радиофизики и прикладных информационных технологий.'},
                {id: 20, value: '210',
                desc: 'Аудитория 210.'}
            ],
            [  // 3
                classroom_default
            ],
            [  // 4
                classroom_default
            ],
            [  // 5
                classroom_default
            ]
        ],
        [  // КПМ
            [classroom_default],
            [  // 1
                classroom_default
            ],
            [  // 2
                classroom_default
            ],
            [  // 3
                classroom_default
            ],
            [  // 4
                classroom_default
            ],
            [  // 5
                classroom_default
            ],
            [  // 6
                classroom_default
            ],
            [  // 7
                classroom_default
            ],
            [  // 8
                classroom_default
            ],
            [  // 9
                classroom_default
            ],
            [  // 10
                classroom_default
            ]
        ],
        [  // ЛК
            [classroom_default],
            [  // 1
                classroom_default
            ],
            [  // 2
                classroom_default
            ],
            [  // 3
                classroom_default
            ],
            [  // 4
                classroom_default
            ],
            [  // 5
                classroom_default
            ]
        ],
        [  // Физтех.Цифра
            [classroom_default],
            [  // 1
                classroom_default
            ],
            [  // 2
                classroom_default
            ],
            [  // 3
                classroom_default
            ],
            [  // 4
                classroom_default
            ],
            [  // 5
                classroom_default
            ],
            [  // 6
                classroom_default
            ]
        ],
        [  // Физтех.Арктика
            [classroom_default],
            [  // 1
                classroom_default
            ],
            [  // 2
                classroom_default
            ],
            [  // 3
                classroom_default
            ],
            [  // 4
                classroom_default
            ],
            [  // 5
                classroom_default
            ],
            [  // 6
                classroom_default
            ]
        ],
        [  // АК
            [classroom_default],
            [  // 1
                classroom_default
            ],
            [  // 2
                classroom_default
            ],
            [  // 3
                classroom_default
            ],
            [  // 4
                classroom_default
            ],
            [  // 5
                classroom_default
            ],
            [  // 6
                classroom_default
            ]
        ],
        [  // РТ
            [classroom_default],
            [  // 1
                classroom_default
            ],
            [  // 2
                classroom_default
            ],
            [  // 3
                classroom_default
            ]
        ],
        [  // БК
            [classroom_default],
            [  // 1
                classroom_default
            ],
            [  // 2
                classroom_default
            ],
            [  // 3
                classroom_default
            ],
            [  // 4
                classroom_default
            ],
            [  // 5
                classroom_default
            ],
            [  // 6
                classroom_default
            ]
        ],
        [  // КСП
            [classroom_default],
            [  // 1
                classroom_default
            ],
            [  // 2
                classroom_default
            ],
            [  // 3
                classroom_default
            ]
        ]
    ];

    const week_days = [
        {id: 0, value: 'Выберите день недели'},
        {id: 1, value: 'Понедельник'},
        {id: 2, value: 'Вторник'},
        {id: 3, value: 'Среда'},
        {id: 4, value: 'Четверг'},
        {id: 5, value: 'Пятница'},
        {id: 6, value: 'Суббота'}
    ];

    const pair_numbers = [
        {id: 0, value: 'Выберите пару'},
        {id: 1, value: '1 (9:00 - 10:25)'},
        {id: 2, value: '2 (10:45 - 12:10)'},
        {id: 3, value: '3 (12:20 - 13:45)'},
        {id: 4, value: '4 (13:55 - 15:20)'},
        {id: 5, value: '5 (15:30 - 16:55)'},
        {id: 6, value: '6 (17:05 - 18:30)'},
        {id: 7, value: '7 (18:35 - 20:00)'}
    ];

    const element_to_variable = {
        'building': buildings,
        'building_short': buildings_short,
        'floor': floors,
        'classroom': classrooms,
        'week_day': week_days,
        'pair_number': pair_numbers
    };

    return element_to_variable[element];

}

export default GetData;
