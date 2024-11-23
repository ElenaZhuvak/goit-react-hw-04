import axios from "axios"

export const fetchImageGallery = async () => {
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=7q_PyXeOVgXJsZXsArM5o60MRGV_bUkd0dtYPDPVY-Y');
    return response.data;
}