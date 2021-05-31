/*
 *
 *24小时制转换12小时制
 *
 */

#include <stdio.h>

int main(void){

	int m,h,t;

	printf("请输入24小时制的时间(hh:mm)：");
	scanf("%2d:%2d",&h,&m);

	t = h;

	switch(h){
		case 0: h = 12;
			break;
		case 13:h = 1;
			break;
		case 14:h = 2;
			break;
		case 15:h = 3;
			break;
		case 16:h = 4;
			break;
		case 17:h = 5;
			break;
		case 18:h = 6;
			break;
		case 19:h = 7;
			break;
		case 20:h = 8;
			break;
		case 21:h = 9;
			break;
		case 22:h = 10;
			break;
		case 23:h = 11;
			break;
		case 24:h = 12;
			break;
	}
	
	if(t>12 || t==0){
		printf("12小时制：现在是%d:%dPM\n",h,m);
	}else{
		printf("12小时制：现在是%d:%dAM\n",h,m);

	}

	return 0;
}
