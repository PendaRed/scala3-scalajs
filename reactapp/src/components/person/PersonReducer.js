
export const PeopleLoadedEvent = {type: 'peopleLoaded', people:[]}

export const personReducer = (state, action) => {
    switch (action.type) {
        case 'peopleLoaded':
            console.log('peopleLoaded:'+action.people.length)
            return {people: action.people, loadTStamp:Date.now(), loaded: true}
    }
}