import csv

from argparse import ArgumentParser

parser = ArgumentParser(description='Append x, y coordinates columns to asic measurement csv, taking pixel column as input.')
parser.add_argument('-f', '--filename',
                    help='Original filename to be appended. Example: chargeScan_threshold_list.csv')

args = parser.parse_args()

print()
print('>> Running with options:')
print('>>   filename =', args.filename)

original_filename = args.filename

# related to original file: read header and data:
file = open(f'{original_filename}')
csvreader = csv.reader(file)
header = []
header = next(csvreader)
rows = []
for row in csvreader:
    rows.append(row)
file.close()

# create new data:
# use original data
# and append two columns that transform pixel to coordinates   
new_header = header + ['x', 'y']
new_rows = []
for row in rows:
    new_row = row + [str(int(row[1]) // 15), str(int(row[1]) % 15)]
    new_rows.append(new_row)


new_filename = f'{original_filename[:-4]}_withCoordinates.csv'
with open(new_filename, 'w', newline="") as new_file:
    csvwriter = csv.writer(new_file)
    csvwriter.writerow(new_header)
    csvwriter.writerows(new_rows)
    

print()
print('>> Finished file writing to:')
print('>>   new_filename =', new_filename)
print()
print('>> Exiting.')
print()
