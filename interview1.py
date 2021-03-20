array1 = ['a', 'b', 'c', 'x'];
array2 = ['z', 'y', 'x']

def interview_1(array1, array2):
    for i in array1:
        if i in array2:
            return True
    return False

print(interview_1(array1, array2))
# 2 parameters - arrays - no size limit
# return True or False