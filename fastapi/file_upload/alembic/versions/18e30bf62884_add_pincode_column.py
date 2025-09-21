"""add pincode column

Revision ID: 18e30bf62884
Revises: 
Create Date: 2025-09-21 15:39:30.369803

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '18e30bf62884'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.add_column('users', sa.Column('pincode', sa.String(length=10), nullable=True))

def downgrade() -> None:
    """Downgrade schema."""
    op.drop_column('users', 'pincode')
