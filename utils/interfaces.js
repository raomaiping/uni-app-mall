const domain = "http://uni-app-mall.raomaiping.xyz/";
const interfaces = {
	//获取首页数据
	getMallData: domain + "api/profiles/mall_list",
	//获取分类数据
	getCategory: domain + "api/profiles/category",
}

module.exports = interfaces;