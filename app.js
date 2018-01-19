
package xyz;

public class Xyz {
    static int arr[] = new int[10001];
    public static void main(String[] args) {
        //int arr[] = new int[10001];
        int i =2;
        while(i<arr.length){
            int num = i;
            for(int j=1;j<=5;j++){
                int result = check(num);
                if(result ==2) arr[num] =2;
                else arr[num] = 1;
                num = change(num);
            }
            i++;
        }
    }
    static int check(int num){
        if(arr[num]==1) return 1;
        else if(arr[num]==2) return 2;
        else {
            int temp = 2;
            while(temp<=Math.sqrt(num)){
                if(num%temp==0) return 0;
                temp++;
            }
            return 2;
        }
    }
    static int change(int num){
        int updated = num;
        int digits = 0;
        while(updated!=0){
            updated/=10;
            digits++;
        }
        int brr[] = new int[digits];
        updated = num;
        for(int x =brr.length-1;x>=0;x--){
            brr[x] = updated%10;
            updated /=10;
        }
        updated =0;
        for(int x =1;x<brr.length;x++){
            updated = updated*10+ brr[x];
        }
        updated = updated*10+ brr[0]; 
        return updated;
    }
    
}
