const defaultData ={
    liste:[
        {id:1,baslik:"Alışveriş yap",tamamlandi:false},
        {id:2,baslik:"Kitap oku",tamamlandi:false},
        {id:3,baslik:"Yemek yap",tamamlandi:false},
    ]
}

export const reducers = (state = defaultData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                liste:[...state.liste,{id:new Date().getTime(),baslik:action.payload,tamamlandi:false}]

            }
        case "DELETE_TODO":
            return {
                ...state,
                liste:state.liste.filter((item)=>item.id !== action.payload)
            }
        case "COMPLETE_TODO":
            return {
                ...state,
                liste:state.liste.map((item)=>item.id === action.payload ? {...item,tamamlandi:!item.tamamlandi}:item)
            }
        default:
            return state;
    }

}
