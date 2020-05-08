import axios from './index'

export const getTest = () => {
  return axios.get('/teacher/env/list/')
}

// export const addUser = () => {
//   return axios.post('/teacher/env/add/')
// }

export const foodchain = () => {
  return axios.post('/teacher/foodchain/list/'
    , {
      data: JSON.stringify({
        create_date: '',
        desc: '',
        id: '',
        img_path: '',
        name: ''
      })
    }
  )
}

// 班级
export const classList = () => {
  return axios.post('/teacher/class/list/'
    , {
      data: JSON.stringify({
        create_date: '',
        desc: '',
        id: '',
        img_path: '',
        name: ''
      })
    }
  )
}

// 课堂
export const classRoomList = () => {
  return axios.post('/teacher/classroom/list/'
    , {
      data: JSON.stringify({
        create_date: '',
        desc: '',
        id: '',
        img_path: '',
        name: ''
      })
    }
  )
}

// 物种关系
export const SpeciesRelations = () => {
  return axios.post('/teacher/foodchain/relation/list/'
    , {
      data: JSON.stringify({
        foodchain_id: Number(19),
        env_id: Number(1)
      })
    }
  )
}
