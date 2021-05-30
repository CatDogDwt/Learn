/*
 *
 *addfrac2.c
 *
 */

#include <stdio.h>

int main(void){

	int mo1,de1,mo2,de2,remo,rede;

	printf("请输入两个分数(x/x+x/x)：");
    	scanf("%d/%d+%d/%d",&mo1,&de1,&mo2,&de2);

    	remo = mo1*de2 + mo2*de1;
    	rede = de2*de1;

    	printf("最后结果为：%d/%d",remo,rede);  

	return 0;
}
