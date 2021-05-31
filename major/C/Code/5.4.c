/*
 *
 *风速测量
 *
 */

#include <stdio.h>

int main(void){

	int HL;

	printf("输入风速：");
	scanf("%d",&HL);

	if(HL<1)
		printf("无风\n");
	else if(HL<3)
		printf("轻风\n");
	else if(HL<27)
		printf("微风\n");
	else if(HL<47)
		printf("大风\n");
	else if(HL<63)
		printf("暴风\n");
	else
		printf("飓风\n");

	return 0;
}
