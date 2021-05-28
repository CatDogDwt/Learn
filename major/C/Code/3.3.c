/*
 *
 *校验ISBN
 *
 */

#include <stdio.h>

int main(void){

	int GS1,Group,Code,Item,Check;

	printf("输入ISBN(xxx-x-xxx-xxxxx-x):");
	scanf("%3d-%1d-%3d-%5d-%1d",&GS1,&Group,&Code,&Item,&Check);

	printf("GS1 prefix:%d\nGroup identifier:%d\nPublisher code:%d\nItem number:%d\nCheck digit:%d\n",GS1,Group,Code,Item,Check);

	return 0;
}
