const Hapi = require('@hapi/hapi');

//создаем сервер
const init = async () => {
// Соединения используются для подключения hapi к сетевому интерфейсу
// чтобы он мог начать принимать входящие запросы.
//Можно заставить сервер слушать несколько портов
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });
// Подключаем "inert" для работы с файлами
    await server.register(require('@hapi/inert'));
//Создание тестовых маршрутов и обработчиков к ним
//В целом маршрут состоит из типа запроса (GET,POST,PATCH)
//и пути по которому будет он находиться (path)
//После  нахождения маршрута происходит запрос к обработчику
//содержащему информацию о том как выполнять запрос
    server.route([{
        method: 'GET',
        path: '/',

        handler: function (request, h) {
            // Сделаем так, чтобы при обращении к localhost:3000 открывалась WEB страница
            return h.file('./Menu.html');
        }
    },{
        method: 'GET',
        path: '/json',
        handler: (request, h) => {
            return ({Hello: 'World2!'});
        }
    },{
        method: 'GET',
        path: '/rand',
        handler: (request, h) => {

            return getRandomInt(1,100);
        }
    }
    ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

// Обработка ошибок
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

// функция генерации рандомного числа
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//инициализация сервера
init();