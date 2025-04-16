## Foydalanuvchi talablaqri
- Foydalanuvchi accaunt yaratishi kerak
- Foydalanuvchi accaunt yaratgandan song database'da saqlanishi kerak
- Foydalanuvchi contact yarata olishi kerak
- Foydalanuvchi Gruppa yarata olishi kerak
- Foydalanuvchi'ni yaratgan contaclarini guruhlarga bolishi olishi kerak

## Table

1. Users:
    - id
    - name	
    - email	
    - password
    - created_at	
    - updated_at

2. Contacts: 
    - id	
    - user_id	
    - first_name	
    - phone	
    - email
    - created_at	
    - updated_at

3. Groups:
    - id	
    - user_id	
    - name	
    - created_at

4. contact_groups: 
    - id	
    - contact_id	
    - group_id