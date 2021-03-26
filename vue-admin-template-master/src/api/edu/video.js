import request from '@/utils/request'

export default {

  // 1 添加小节
  addVideo(video) {
    return request({
      // url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
      url: '/eduservice/video/addVideo/',
      method: 'post',
      data: video
    })
  },
  // 根据Id查询小节
  getChapter(videoId) {
    return request({
      // url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
      url: '/eduservice/video/getVideoInfo/' + videoId,
      method: 'get'
    })
  },
  // 修改小节
  updateVideo(video) {
    return request({
      // url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
      url: '/eduservice/video/updateVideo/',
      method: 'post',
      data: video
    })
  },
  // 根据Id删除小节
  deleteVideo(id) {
    return request({
      // url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
      url: '/eduservice/video/' + id,
      method: 'delete'
    })
  },
  // 根据Id删除小节
  deleteAlyvod(id) {
    return request({
      // url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
      url: '/eduvod/video/removeAlyVideo/' + id,
      method: 'delete'
    })
  }
}
