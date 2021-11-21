import http from "../http";

class BlogService {
    // 获取所有博客
    getAllBlogs() {
        return http.get("/blog");
    }

    // 获取 id 为 :id 的博客
    getBlogById(id) {
        return http.get(`/blog/${id}`);
    }

    // 创建一篇博客
    addBlog(data) {
        return http.post("/blog", data);
    }

    // 更新 id 为 :id 的博客
    updateBlog(id, data) {
        return http.put(`/blog/${id}`, data);
    }

    // 删除 id 为 :id 的博客
    deleteBlog(id) {
        return http.delete(`/blog/${id}`);
    }
}
export default new BlogService();