#!/usr/bin/python
import ctypes
import os
import sys
import pickle
 
 
def newData():
    data = {}
    data['index'] = -1
    data['size'] = 0
    data['filters'] = []
    return data
 
 
def loadPickle():
    if not os.path.isfile('history.pickle'):
        open('history.pickle', 'w+')
        return newData()
    try:
        with open("history.pickle", "rb") as data:
            return pickle.load(data)
    except EOFError:
        return newData()
 
 
def savePickle(data):
    print data
    with open('history.pickle', mode='wb+') as handle:
        pickle.dump(data, handle)
 
 
def addFilter(data, filter):
    filters = data['filters']  # get original filters
    filters = filters[:data['index']]  # remove all filters after current index
    data['index'] = len(filters)  # set new index (length - 1 + 1 as we are appending a new filter)
    filters.append(filter)  # append filter
    data['filters'] = filters
    data['size'] = len(filters)
 
 
def undo(data):
    index = data['index']
    if (index <= 0): return None  # do not undo when you can't
    filters = data['filters']
    data['index'] -= 1  # go back one
    return filters[data['index']]  # return filter at new index
 
 
def redo(data):
    index = data['index']
    if (index >= data['size'] - 1): return None  # do not redo when you can't
    filters = data['filters']
    data['index'] += 1  # go forward one
    return filters[data['index']]  # return filter at new index
 
def checkArgs(count):
    if (len(sys.argv) < count):
        print "Not enough arguments"
        sys.exit()
 
def main():
    # importing the library
    libc = ctypes.cdll.LoadLibrary("./libfast_filter.so")
    image = None
 
    # if user asks to load
    if sys.argv[1] == "load":
        checkArgs(2)
        inputFile = sys.argv[2]
        f = open(inputFile, 'rb')
        actImageData = f.read()
        f.close()
 
    data = loadPickle()
 
    if sys.argv[1] == "filter":
 
        imgWidth = int(sys.argv[2])
        filter_img = len(sys.argv) - 3
 
        filterImg = filter_img * [None]
        weightValue = 0
 
        for i in sys.argv[3:]:
            filterImg[weightValue] = float(i)
        weightValue += 1
 
        convertedArray = (ctypes.c_float * len(filterImg))(*filterImg)
        orgImSize = os.path.getsize(inputFile)
 
        result = (ctypes.c_char * orgImSize)()
        # send results to method
        libc.doFiltering(actImageData, convertedArray, imgWidth, result)
 
        destMat = open(outputFile, 'wb')
        destMat.write(result)
 
        destMat.close()
 
    elif sys.argv[1] == "undo":
        undo(data)
 
    elif sys.argv[1] == "redo":
        redo(data)
 
 
main()