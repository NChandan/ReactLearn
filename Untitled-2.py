def format(v):
    f_list = v.split('-')
    count= 0
    f_str = ""
    for i in f_list:
        if count==0:
            count+=1
            f_str+=i
            continue
        f_str += i.capitalize()
    print(f_str)


format("relation-one-or-many-to-one")
format("relation-one-or-many-to-one-or-many")
format("relation-one-or-many-to-only-one")
format("relation-one-or-many-to-zero-or-many")

format("relation-one-or-many-to-zero-or-one")
format("relation-one-to-many")
format("relation-one-to-one")
format("relation-one-to-one-or-many")

format("relation-one-to-only-one")
format("relation-one-to-zero-or-many")
format("relation-one-to-zero-or-one")
format("")

format("relation-only-one-to-many")
format("relation-only-one-to-one")
format("relation-only-one-to-one-or-many")
format("relation-only-one-to-only-one")

format("relation-only-one-to-zero-or-many")
format("relation-only-one-to-zero-or-one")
format("relation-zero-or-many-to-many")
format("relation-zero-or-many-to-one")

format("relation-zero-or-many-to-one-or-many")
format("relation-zero-or-many-to-only-one")
format("relation-zero-or-many-to-zero-or-many")
format("")

format("relation-zero-or-many-to-zero-or-one")
format("relation-zero-or-one-to-many")
format("relation-zero-or-one-to-one")
format("relation-zero-or-one-to-one-or-many")

format("relation-zero-or-one-to-only-one")
format("relation-zero-or-one-to-zero-or-many")
format("relation-zero-or-one-to-zero-or-one")
format("")
