# Python program to read an write an image
import numpy as np
import imageio as iio

# read an image 
img = iio.imread("C:/Users/P96134141/Desktop/test.jpg")
a = np.array(img)
print(a)