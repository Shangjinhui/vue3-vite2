import {fetch} from '@/untils/fetch'
export const getIndex = (data) => {
    return fetch({
        url:'v1/common/webFooter',
        data
    })
}