from PIL import Image

img=Image.open('./1.png')
# 获取一个像素点的RGBA值
# print(img.getpixel((2,2)));
# 获取图片的长度和宽度
rows,cols=img.size;

points="["

# 遍历整张图片的像素点
for row in range(rows):
    for col in range(cols):
        pixel=img.getpixel((row,col));
        if pixel[0]<230 and pixel[1]<230 and pixel[2]<230: #过滤出我们想要的黑点
            #  把黑点的坐标打印一下
            # print('['+str(row)+','+str(col)+']')
            points+='['+str(row)+','+str(col)+'],'

points+=']'

# 把所有坐标做成一个字符窜
# 写到文件中
file=open("./data.js","w")
file.write(points)

print(points)


