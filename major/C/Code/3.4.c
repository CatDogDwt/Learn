/*
 *
 *电话号码
 *
 */

#include <stdio.h>

int main(void){

	int num1,num2,num3;

	printf("输入电话号码：[ (xxx) xxx-xxxx ]");
	scanf("(%3d) %3d-%4d",&num1,&num2,&num3);

	printf("你输入的电话号码：%3d.%3d.%4d\n",num1,num2,num3);

	return 0;
}
