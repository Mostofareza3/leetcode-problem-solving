
# def distinct_count(arr):
#     distinct_arr=[]
#     for el in range(len(arr)):
#         if(distinct_arr.count(el) == False):
#             distinct_arr.append(el)
#     return distinct_arr
#
# print(distinct_count([1,2,2,4]))

def distinct_count(arr):
    distinct_arr = []
    for el in arr:
        if el not in distinct_arr:
            distinct_arr.append(el)
    return distinct_arr