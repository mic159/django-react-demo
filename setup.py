from setuptools import setup, find_packages

setup(
    name='react-demo',
    version='1.0.0',
    packages=find_packages(),
    install_requires=[
        'Django==3.1.13',
        'react-render-client==1.0.0'
    ],
    entry_points={
        'console_scripts': [
            'demo = react_demo.manage:main'
        ]
    }
)