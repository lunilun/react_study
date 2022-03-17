import Users from './Pages/Users.js';
import UserInfo from './Pages/UserInfo.js';
import MoviePage from './Pages/MoviePage';
import HomePage from './Pages/HomePage';

//폴더 자체를 look으로 돌려서 라우터 생성가능하다고함(vue.js도...)
export default [
    {
        path: '/',
        conponent:HomePage,
    },
    {
        path: '/movies',
        conponent:MoviePage,
    },
    {
        path: '/users',
        conponent:Users,
    },
    {
        //라우터 생성하는 부분에서 에러가 뜨는데?!
        path: '/users/:id',
        conponent:UserInfo,
    }
]