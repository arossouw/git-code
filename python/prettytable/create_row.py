#!/usr/bin/env python3

from prettytable import PrettyTable
    
x = PrettyTable()

def to_markdown_table(pt):
    """
    Print a pretty table as a markdown table
    
    :param py:obj:`prettytable.PrettyTable` pt: a pretty table object.  Any customization
      beyond int and float style may have unexpected effects
    
    :rtype: str
    :returns: A string that adheres to git markdown table rules
    """
    _junc = pt.junction_char
    if _junc != "|":
        pt.junction_char = "|"
    markdown = [row[1:-1] for row in pt.get_string().split("\n")[1:-1]]
    pt.junction_char = _junc
    return "\n".join(markdown)

x.field_names = ["City name", "Area", "Population", "Annual Rainfall"]

x.add_row(["Adelaide", 1295, 1158259, 600.5])
x.add_row(["Brisbane", 5905, 1857594, 1146.4])
x.add_row(["Darwin", 112, 120900, 1714.7])
x.add_row(["Hobart", 1357, 205556, 619.5])
x.add_row(["Sydney", 2058, 4336374, 1214.8])
x.add_row(["Melbourne", 1566, 3806092, 646.9])
x.add_row(["Perth", 5386, 1554769, 869.4])

print(x)
print('-- MARKDOWN --')
md = to_markdown_table(x)
print(md)
