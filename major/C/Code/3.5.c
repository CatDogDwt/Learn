/*
 *
 *显示4X4矩阵
 *计算每行、每列、对角线之和
 *
 */

#include <stdio.h>

int main(void){

	int n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16;

	printf("按任意次序输入1-16内的所有整数：");
	scanf("%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d%d",&n1,&n2,&n3,&n4,&n5,&n6,&n7,&n8,&n9,&n10,&n11,&n12,&n13,&n14,&n15,&n16);

	printf("%d\t%d\t%d\t%d\n%d\t%d\t%d\t%d\n%d\t%d\t%d\t%d\n%d\t%d\t%d\t%d\n",n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16);

	printf("每行之和：%d %d %d %d\n",n1+n2+n3+n4,n5+n6+n7+n8,n9+n10+n11+n12,n13+n14+n15+n16);
	printf("每列之和：%d %d %d %d\n",n1+n5+n9+n13,n2+n6+n10+n14,n3+n7+n11+n15,n4+n8+n12+n16);
	printf("每条对角线之和：%d %d\n",n1+n6+n11+n16,n4+n7+n10+n13);

	return 0;
}
