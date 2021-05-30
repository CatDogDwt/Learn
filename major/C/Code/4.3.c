/*
 *
 *不需要算术分割的逆序输出
 *
 */

#include <stdio.h>

int main(void){

	int G,S,B;

	printf("输入一个三位数：");
	scanf("%1d%1d%1d",&G,&S,&B);

	printf("逆序输出：%1d%1d%1d",B,S,G);

	return 0;
}
