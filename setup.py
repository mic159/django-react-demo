from setuptools import setup, find_packages

setup(
    name='react-demo',
    version='0.1.0',
    packages=find_packages(),
    install_requires=[
        'Django==1.8.0',
        'react-render-client==0.10.3'
    ],
    entry_points={
        'console_scripts': [
            'demo = react_demo.manage:main'
        ]
    }
)