import requests
def count(owner,repo):
    url =f"https://github.com/yash3028/Data-Strucures"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        total_lines = sum(data.values())
        return total_lines
    else:
        print("Error fetching data:", response.json())
        return 0
owner="yash3028"
repo="Data-Strucures"
print("Total lines in GitHub repo:", count(owner, repo))