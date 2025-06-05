
def distinct_count(arr):
    distinct_arr=[]
    for el in range(arr):
        if(distinct_arr.count(el) == False):
            distinct_arr.append(el)
    return distinct_arr

